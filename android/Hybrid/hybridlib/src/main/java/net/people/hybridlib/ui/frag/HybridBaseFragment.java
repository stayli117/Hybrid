package net.people.hybridlib.ui.frag;

import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.app.ActivityCompat;
import android.support.v4.app.Fragment;
import android.support.v7.app.AppCompatActivity;
import android.text.TextUtils;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.facebook.drawee.backends.pipeline.Fresco;

import net.people.hybridlib.R;
import net.people.hybridlib.core.HyBridWebChromeClient;
import net.people.hybridlib.core.HyBridWebViewClient;
import net.people.hybridlib.core.HybridConfig;
import net.people.hybridlib.core.HybridJsInterface;
import net.people.hybridlib.widget.HybridWebView;


/**
 *
 * 基本的 Fragment 配置
 */

public abstract class HybridBaseFragment extends Fragment implements FragmentBackHandler, IWebClientListener {


    protected HybridWebView mWebView;
    protected HyBridWebViewClient mWebViewClient;
    private LinearLayout mLlContent;

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.hybrid_webview_act, container, false);
        mLlContent = (LinearLayout) view.findViewById(R.id.ll_content);
        mWebView = (HybridWebView) view.findViewById(R.id.hybrid_webview);
        initConfig(mWebView);
        return view;
    }


    /**
     * 需要设置webview的属性则重写此方法
     *
     * @param webView
     */
    protected void initConfig(WebView webView) {
        WebSettings settings = webView.getSettings();
        settings.setAllowFileAccess(true);
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setCacheMode(WebSettings.LOAD_NO_CACHE);
        settings.setUserAgentString(settings.getUserAgentString() + " hybrid_1.0.0 ");
        mWebViewClient = new HyBridWebViewClient(webView);
        mWebViewClient.setListener(this);
        webView.setWebViewClient(mWebViewClient);
        webView.setWebChromeClient(new HyBridWebChromeClient());
        webView.addJavascriptInterface(new HybridJsInterface(), HybridConfig.JSInterface);
        settings.setJavaScriptCanOpenWindowsAutomatically(true);
    }

    protected void loadUrl(String url) {
        if (TextUtils.isEmpty(url)) return;
        mWebViewClient.setHostFilter(Uri.parse(url).getHost());
        mWebView.loadUrl(url);
    }


    @Override
    public boolean onBackPressed() {
        return false;
    }

    @Override
    public void onSuccess() {

    }

    @Override
    public void onFail() {
        TextView textView = new TextView(getContext());
        textView.setText(" 加载失败 \n 点击重试");
        textView.setTextSize(22f);
        mLlContent.addView(textView);
        mWebView.setVisibility(View.GONE);
    }
}
