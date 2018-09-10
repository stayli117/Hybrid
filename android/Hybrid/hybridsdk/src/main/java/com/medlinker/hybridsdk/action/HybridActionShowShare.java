package com.medlinker.hybridsdk.action;

import android.webkit.WebView;

import com.medlinker.hybridsdk.param.HybridParamShowShare;

import de.greenrobot.event.EventBus;

/**
 * Created by vane on 16/6/6.
 */

public class HybridActionShowShare extends HybridAction {

    @Override
    public void onAction(WebView webView, String params, String jsmethod) {
        HybridParamShowShare hybridParam = mGson.fromJson(params, HybridParamShowShare.class);
        EventBus.getDefault().post(hybridParam);
    }
}
