package net.people.hybridlib.core;

import android.util.Log;
import android.webkit.JsResult;
import android.webkit.WebChromeClient;
import android.webkit.WebView;

/**
 * author: people_yh_Gao
 * time  : 2018/2/6
 * desc  :
 */

public class HyBridWebChromeClient extends WebChromeClient {
    private static final String TAG = "HyBridWebChromeClient";
    private boolean mIsFirstProgress = false;

    @Override
    public void onProgressChanged(WebView view, int newProgress) {
        super.onProgressChanged(view, newProgress);
        Log.e(TAG, "onProgressChanged:" + newProgress);
        if (newProgress != 100) {
            Log.e(TAG, "onProgressChanged: 加载进度" + newProgress);
            return;
        }

        if (!mIsFirstProgress) {
            Log.e(TAG, "onProgressChanged: 加载完成");
            mIsFirstProgress = true;
        }
    }

    @Override
    public boolean onJsAlert(WebView view, String url, String message, JsResult result) {
        return super.onJsAlert(view, url, message, result);
    }
}

