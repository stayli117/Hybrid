package net.people.hybridlib.ui.frag;

import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.FragmentTransaction;
import android.text.TextUtils;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
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
import net.people.hybridlib.param.HybridParamShowHeader;
import net.people.hybridlib.param.HybridParamShowLoading;
import net.people.hybridlib.param.HybridParamShowShare;
import net.people.hybridlib.param.HybridParamUpdateHeader;
import net.people.hybridlib.ui.act.HybridWebViewActivity;
import net.people.hybridlib.widget.NavgationView;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Set;

import de.greenrobot.event.EventBus;
import de.greenrobot.event.Subscribe;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

/**
 * Created by yhgao on 2018/2/27.
 */

public class HybridWebViewFragment extends HybridBaseFragment {
    public static final String URL = "";
    private NavgationView mNavgationView;
    private ProgressBar mProgessbar;
    private Bundle mBundle;


    public static HybridWebViewFragment newInstance(Bundle bundle) {
        HybridWebViewFragment fragment = new HybridWebViewFragment();
        fragment.setArguments(bundle);
        return fragment;
    }

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() !=null){
            mBundle = getArguments();
        }
    }

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = super.onCreateView(inflater, container, savedInstanceState);
        EventBus.getDefault().register(this);
        mNavgationView = (NavgationView) view.findViewById(R.id.hybrid_navgation);
        mProgessbar = (ProgressBar) view.findViewById(R.id.hybrid_progressbar);
        boolean navgation = getActivity().getIntent().getBooleanExtra(HybridConstant.INTENT_EXTRA_KEY_HASNAVGATION, true);
        if (navgation) {
            mNavgationView.appendNavgation(NavgationView.Direct.LEFT, "", R.drawable.ic_back, new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    finish();
                }
            }).setVisibility(View.VISIBLE);
        } else {
            mNavgationView.setVisibility(View.GONE);
        }
        if (!TextUtils.isEmpty(getUrl())) {
            loadUrl(getUrl());
        }

        return view;
    }


    protected String getUrl() {
        String url = null;
        if (mBundle!=null){
           url= mBundle.getString(HybridConstant.INTENT_EXTRA_KEY_TOPAGE);
        }
        return url;
    }

    @Override
    public boolean onBackPressed() {
        Log.e("vane", "webview cangoback= " + mWebView.canGoBack());
        if (mWebView.canGoBack()) {
            mWebView.goBack();
        } else {
            return super.onBackPressed();
        }

        return false;
    }


    public void finish() {
        HybridParamAnimation animation = (HybridParamAnimation) getActivity().getIntent().getSerializableExtra(HybridConstant.INTENT_EXTRA_KEY_ANIMATION);
        FragmentTransaction transaction = getActivity().getSupportFragmentManager().beginTransaction();
        if (null == animation || animation.equals(HybridParamAnimation.PUSH)) {
//            overridePendingTransition(R.anim.hybrid_left_in, R.anim.hybrid_right_out);
            transaction.setCustomAnimations(R.anim.hybrid_left_in, R.anim.hybrid_left_in);
        } else if (animation.equals(HybridParamAnimation.POP)) {
//            overridePendingTransition(R.anim.hybrid_right_in, R.anim.hybrid_left_out);
            transaction.setCustomAnimations(R.anim.hybrid_right_in, R.anim.hybrid_left_out);
        } else if (animation.equals(HybridParamAnimation.PRESENT)) {
            transaction.setCustomAnimations(R.anim.hybrid_top_in, R.anim.hybrid_bottom_out);
//            overridePendingTransition(R.anim.hybrid_top_in, R.anim.hybrid_bottom_out);
        }
//        transaction.replace(containerId,fraB);
//        transaction.commit();
    }


    @Override
    public void onDestroyView() {
        super.onDestroyView();
        EventBus.getDefault().unregister(this);
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
        return;
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
            mNavgationView.startAnimation(AnimationUtils.loadAnimation(getActivity(), msg.display ? R.anim.hybrid_top_in : R.anim.hybrid_top_out));
    }

    /**
     * 分享操作
     *
     * @param msg
     */
    @Subscribe
    public void onEventMainThread(HybridParamShowShare msg) {
        Toast.makeText(getActivity(), "" + msg.toString(), Toast.LENGTH_SHORT).show();
    }


    /**
     * ajax请求
     *
     * @param msg
     */
    @Subscribe
    public void onEventMainThread(final HybridParamAjax msg) {
        if (TextUtils.isEmpty(msg.url)) return;
        Uri uri = Uri.parse(msg.url);
        HybridAjaxService.IApiService service = HybridAjaxService.getService(uri);
        Set<String> queryParameterNames = uri.getQueryParameterNames();
        HashMap<String, String> map = new HashMap<>();
        if (null != queryParameterNames && !queryParameterNames.isEmpty()) {
            Iterator<String> iterator = queryParameterNames.iterator();
            while (iterator.hasNext()) {
                String next = iterator.next();
                map.put(next, uri.getQueryParameter(next));
            }
        }
        String path = uri.getPath();
        Call<String> call = msg.tagname.equals(HybridParamAjax.ACTION.POST) ?
                service.post(path, map) : service.get(path, map);
        call.enqueue(new Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                if (TextUtils.isEmpty(msg.callback)) return;
                HybridParamCallback hybridParamCallback = new HybridParamCallback();
                hybridParamCallback.callback = msg.callback;
                hybridParamCallback.data = response.body();
                handleHybridCallback(hybridParamCallback);
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
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
                    mNavgationView.appendNavgation(NavgationView.Direct.LEFT, param.value, HybridConfig.IconMapping.mapping(param.tagname),
                            new HybridWebViewFragment.H5UpdateHeaderClickListener(param));
                } else {
                    mNavgationView.appendNavgation(NavgationView.Direct.LEFT, param.value, param.icon, new HybridWebViewFragment.H5UpdateHeaderClickListener(param));
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
                            new HybridWebViewFragment.H5UpdateHeaderClickListener(param));
                } else {
                    mNavgationView.appendNavgation(NavgationView.Direct.RIGHT, param.value, param.icon,
                            new HybridWebViewFragment.H5UpdateHeaderClickListener(param));
                }
            }
        }
        //title
        HybridParamUpdateHeader.NavgationTitleParam title = msg.title;
        mNavgationView.setTitle(title.title, title.subtitle, title.lefticon, title.righticon,
                new HybridWebViewFragment.H5UpdateHeaderClickListener(title));
    }

    private final class H5UpdateHeaderClickListener implements View.OnClickListener {

        private HybridParamCallback param;

        public H5UpdateHeaderClickListener(HybridParamCallback param) {
            this.param = param;
        }

        @Override
        public void onClick(View v) {
            handleHybridCallback(param);
        }
    }

    private void handleHybridCallback(final HybridParamCallback param) {
//        if (isDestroyed()) return;
        if (!TextUtils.isEmpty(param.callback)) {

            String script = "Hybrid.callback(" + new HybridWebViewActivity.H5RequestEntity(param.callback, param.data).toString() + ")";
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
                mWebView.evaluateJavascript(script, new ValueCallback<String>() {
                    @Override
                    public void onReceiveValue(String value) {
                        if (!"true".equals(value) && "back".equals(param.tagname))
                            onBackPressed();
                    }
                });
            } else {
                mWebView.loadUrl("javascript:Hybrid.callback(" + new HybridWebViewActivity.H5RequestEntity(param.callback, param.data).toString() + ")");
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

