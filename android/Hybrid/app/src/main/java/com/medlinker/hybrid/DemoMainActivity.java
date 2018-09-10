package com.medlinker.hybrid;

import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.webkit.WebView;

import net.people.hybridlib.core.HybridAjaxService;
import net.people.hybridlib.ui.act.HybridWebViewActivity;


public class DemoMainActivity extends HybridWebViewActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Log.e("vane", "DemoMainActivity onCreate");
//        HybridAjaxService.checkVersion(context);
        HybridAjaxService.checkVersion(this);
    }

    @Override
    protected String getUrl() {
        Uri data = getIntent().getData();
        String url = null;
        if (null == data) {
            url = getIntent().getStringExtra("url");
        } else {
            url = data.toString();
        }
        return url;
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        Log.e("vane", "DemoMainActivity onDestroy");
    }

    @Override
    protected void initConfig(WebView webView) {
        super.initConfig(webView);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            //方便webview在choreme调试
            WebView.setWebContentsDebuggingEnabled(true);
        }
    }
}
