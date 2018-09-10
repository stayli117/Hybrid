package net.people.hybridlib.ui.act;

import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.support.v4.content.ContextCompat;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.view.animation.AnimationUtils;
import android.webkit.ValueCallback;
import android.widget.ProgressBar;
import android.widget.Toast;


import net.people.hybridlib.R;
import net.people.hybridlib.core.HybridAjaxService;
import net.people.hybridlib.core.HybridConfig;
import net.people.hybridlib.core.HybridConstant;
import net.people.hybridlib.param.HybridParamAjax;
import net.people.hybridlib.param.HybridParamAnimation;
import net.people.hybridlib.param.HybridParamBack;
import net.people.hybridlib.param.HybridParamCallback;
import net.people.hybridlib.param.HybridParamForward;
import net.people.hybridlib.param.HybridParamShowHeader;
import net.people.hybridlib.param.HybridParamShowLoading;
import net.people.hybridlib.param.HybridParamShowShare;
import net.people.hybridlib.param.HybridParamUpdateHeader;
import net.people.hybridlib.widget.NavgationView;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import de.greenrobot.event.EventBus;
import de.greenrobot.event.Subscribe;
import okhttp3.HttpUrl;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

/**
 * Created by vane on 16/6/3.
 */

public class HybridWebViewActivity extends HybridBaseActivity {

    private NavgationView mNavgationView;
    private ProgressBar mProgessbar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Log.e("vane", "HybridWebViewActivity onCreate");
        EventBus.getDefault().register(this);
        mNavgationView = (NavgationView) findViewById(R.id.hybrid_navgation);
        mProgessbar = (ProgressBar) findViewById(R.id.hybrid_progressbar);
        boolean navgation = getIntent().getBooleanExtra(HybridConstant.INTENT_EXTRA_KEY_HASNAVGATION, true);
        if (navgation) {
            mNavgationView.appendNavgation(NavgationView.Direct.LEFT, "原生标题", R.drawable.ic_back, new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    onBackPressed();
                }
            })
                    .appendNavgation(NavgationView.Direct.RIGHT, "搜索", "http://images2015.cnblogs.com/blog/294743/201511/294743-20151102143118414-1197511976.png", new View.OnClickListener() {
                        @Override
                        public void onClick(View v) {

                        }
                    }).setVisibility(View.VISIBLE);

            mNavgationView.setTitle("主标题", "", "", "", null);

        } else {
            mNavgationView.setVisibility(View.GONE);
        }
        HybridParamAjax ajax = new HybridParamAjax();
        Map<String, String> map = new HashMap<>();
//        map.put("a", "1");
//        map.put("b", "2");
        ajax.param = map;
        ajax.url = "https://api.douban.com/v2/book/1220562";
        ajax.tagname = HybridParamAjax.ACTION.GET;

        onEventMainThread(ajax);
        if (!TextUtils.isEmpty(getUrl())) {
            loadUrl(getUrl());
        }
    }

    protected String getUrl() {
        Uri data = getIntent().getData();
        String url = null;
        if (null == data) {
            url = getIntent().getStringExtra(HybridConstant.INTENT_EXTRA_KEY_TOPAGE);
        } else {
            url = data.toString();
        }
        return url;
    }

    @Override
    public void onBackPressed() {
        Log.e("vane", "webview cangoback= " + mWebView.canGoBack());
        if (mWebView.canGoBack()) {
            mWebView.goBack();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public void finish() {
        super.finish();
        HybridParamAnimation animation = (HybridParamAnimation) getIntent().getSerializableExtra(HybridConstant.INTENT_EXTRA_KEY_ANIMATION);
        if (null == animation || animation.equals(HybridParamAnimation.PUSH)) {
            overridePendingTransition(R.anim.hybrid_left_in, R.anim.hybrid_right_out);
        } else if (animation.equals(HybridParamAnimation.POP)) {
            overridePendingTransition(R.anim.hybrid_right_in, R.anim.hybrid_left_out);
        } else if (animation.equals(HybridParamAnimation.PRESENT)) {
            overridePendingTransition(R.anim.hybrid_top_in, R.anim.hybrid_bottom_out);
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        EventBus.getDefault().unregister(this);
        Log.e("vane", "HybridWebViewActivity onCreate");
    }

    /**
     * 返回通知
     *
     * @param msg
     */
    @Subscribe
    public void onEventMainThread(HybridParamBack msg) {
        if (null == msg) return;
        onBackPressed();
    }


    /**
     * 显示、隐藏loading
     *
     * @param msg
     */
    @Subscribe
    public void onEventMainThread(HybridParamShowLoading msg) {
        if (null == msg) return;
        if (!msg.display) {
            mProgessbar.setVisibility(View.GONE);
            return;
        }
        Drawable drawable = getResources().getDrawable(R.drawable.progressbar_rotate);
        mProgessbar.setIndeterminateDrawable(drawable);
        mProgessbar.setVisibility(View.VISIBLE);
    }

    /**
     * 显示、隐藏header通知
     *
     * @param msg
     */
    @Subscribe
    public void onEventMainThread(HybridParamShowHeader msg) {
        if (null == msg) return;
        mNavgationView.setVisibility(msg.display ? View.VISIBLE : View.GONE);
        if (msg.animate)
            mNavgationView.startAnimation(AnimationUtils.loadAnimation(this, msg.display ? R.anim.hybrid_top_in : R.anim.hybrid_top_out));
    }

    /**
     * 分享操作
     *
     * @param msg
     */
    @Subscribe
    public void onEventMainThread(HybridParamShowShare msg) {
        Toast.makeText(this, "" + msg.toString(), Toast.LENGTH_SHORT).show();
    }


    /**
     * ajax请求
     *
     * @param msg
     */
    @Subscribe
    public void onEventMainThread(final HybridParamAjax msg) {
        if (TextUtils.isEmpty(msg.url)) return;


        Log.e("ajax", "onEventMainThread: " + msg.url);
        Log.e("ajax", "onEventMainThread: " + msg.param);
        Log.e("ajax", "onEventMainThread: " + msg.callback);
        Uri uri = Uri.parse(msg.url);
        HybridAjaxService.IApiService service = HybridAjaxService.getService(uri);
        Set<String> queryParameterNames = uri.getQueryParameterNames();

        Map<String, String> map = msg.param;
        if (null != queryParameterNames && !queryParameterNames.isEmpty()) {
            Iterator<String> iterator = queryParameterNames.iterator();
            while (iterator.hasNext()) {
                String next = iterator.next();
                map.put(next, uri.getQueryParameter(next));
            }
        }
        Log.e("ajax", "onEventMainThread: " + uri);

        String path = uri.getPath();
        Log.e("ajax", "onEventMainThread: " + path);


        path = path.substring(1);


        Call<String> call = msg.tagname.equals(HybridParamAjax.ACTION.POST) ?
                service.post(path, map) : service.get(path, map);


        Log.e("ajax", "onEventMainThread: " + call.request().url().url());
        call.enqueue(new Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                Log.e("TAG", "onResponse: " + response);
                if (TextUtils.isEmpty(msg.callback)) return;
                HybridParamCallback hybridParamCallback = new HybridParamCallback();
                hybridParamCallback.callback = msg.callback;
                hybridParamCallback.data = response.body();
                handleHybridCallback(hybridParamCallback);
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                t.printStackTrace();
            }
        });
    }

    /**
     * 更新header通知
     *
     * @param msg
     */
    @Subscribe
    public void onEventMainThread(HybridParamUpdateHeader msg) {
        if (null == msg) return;
        if (msg.id != mWebView.hashCode()) return;
        mNavgationView.cleanNavgation();
        // left
        ArrayList<HybridParamUpdateHeader.NavgationButtonParam> left = msg.left;
        if (null != left && !left.isEmpty()) {
            int size = left.size();
            for (int i = 0; i < size; i++) {
                final HybridParamUpdateHeader.NavgationButtonParam param = left.get(i);
                if (TextUtils.isEmpty(param.icon)) {
                    mNavgationView.appendNavgation(NavgationView.Direct.LEFT, param.value,
                            HybridConfig.IconMapping.mapping(param.tagname),
                            new H5UpdateHeaderClickListener(param));
                } else {
                    mNavgationView.appendNavgation(NavgationView.Direct.LEFT, param.value, param.icon, new H5UpdateHeaderClickListener(param));
                }
            }
        }
        //right
        ArrayList<HybridParamUpdateHeader.NavgationButtonParam> right = msg.right;
        if (null != right && !right.isEmpty()) {
            int size = right.size();
            for (int i = 0; i < size; i++) {
                final HybridParamUpdateHeader.NavgationButtonParam param = right.get(i);
                if (TextUtils.isEmpty(param.icon)) {
                    mNavgationView.appendNavgation(NavgationView.Direct.RIGHT, param.value,
                            HybridConfig.IconMapping.mapping(param.tagname),
                            new H5UpdateHeaderClickListener(param));
                } else {
                    mNavgationView.appendNavgation(NavgationView.Direct.RIGHT, param.value, param.icon, new H5UpdateHeaderClickListener(param));
                }
            }
        }
        //title
        HybridParamUpdateHeader.NavgationTitleParam title = msg.title;
        mNavgationView.setTitle(title.title, title.subtitle, title.lefticon, title.righticon, new H5UpdateHeaderClickListener(title));

        //style
        HybridParamUpdateHeader.NavgationStyleParam style = msg.style;
        mNavgationView.setBackgroundColor(Color.parseColor(style.backgroundcolor));

    }

    private final class H5UpdateHeaderClickListener implements View.OnClickListener {

        private HybridParamCallback param;

        public H5UpdateHeaderClickListener(HybridParamCallback param) {
            this.param = param;
        }

        @Override
        public void onClick(View v) {
            handleHybridCallback(param);
            if (param instanceof HybridParamUpdateHeader.NavgationButtonParam) {
                if ("back".equals(((HybridParamUpdateHeader.NavgationButtonParam) param).value)) {
                    onBackPressed();
                }
            }

        }
    }

    private void handleHybridCallback(final HybridParamCallback param) {
        if (isDestroyed()) return;
        if (!TextUtils.isEmpty(param.callback)) {
//            new H5RequestEntity(param.callback, null);
            String script = "Hybrid.callback(" + new H5RequestEntity(param.callback, param.data).toString() + ")";
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
                mWebView.evaluateJavascript(script, new ValueCallback<String>() {
                    @Override
                    public void onReceiveValue(String value) {
                        if (!"true".equals(value) && "back".equals(param.tagname))
                            onBackPressed();
                    }
                });
            } else {
                mWebView.loadUrl("javascript:Hybrid.callback(" + new H5RequestEntity(param.callback, param.data).toString() + ")");
//                String js = "javascript:(function(){var result= Hybrid.callback(" + new H5RequestEntity(param.callback, param.data).toString() + ");window." + HybridConfig.JSInterface + ".stringByEvaluatingJavaScriptFromString(\"" + param.tagname + "\",result);})()";
//                Log.e("vane","js="+js);
//                mWebView.loadUrl(js);
            }

        } else if ("back".equals(param.tagname)) {
            onBackPressed();
        }
    }

    public static final class H5RequestEntity {

        public H5RequestEntity(String callback, String data) {
            this.data = data;
            this.callback = callback;
        }

        public String callback;
        public String data;

        @Override
        public String toString() {
            JSONObject jsonObject = new JSONObject();
            try {
                jsonObject.put("callback", callback);
                jsonObject.put("data", data);
            } catch (JSONException e) {
                e.printStackTrace();
            }
            return jsonObject.toString();
        }
    }
}
