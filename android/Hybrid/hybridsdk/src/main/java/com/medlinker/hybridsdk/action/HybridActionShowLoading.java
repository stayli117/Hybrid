package com.medlinker.hybridsdk.action;


import android.webkit.WebView;

import com.medlinker.hybridsdk.param.HybridParamShowLoading;

import de.greenrobot.event.EventBus;

/**
 * Created by vane on 16/6/6.
 */

public class HybridActionShowLoading extends HybridAction {

    @Override
    public void onAction(WebView webView, String params, String jsmethod) {
        HybridParamShowLoading hybridParam = mGson.fromJson(params, HybridParamShowLoading.class);
        EventBus.getDefault().post(hybridParam);
    }
}
