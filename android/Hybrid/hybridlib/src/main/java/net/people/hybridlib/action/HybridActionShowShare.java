package net.people.hybridlib.action;

import android.webkit.WebView;


import net.people.hybridlib.param.HybridParamShowShare;

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
