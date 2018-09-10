package net.people.hybridlib.action;


import android.webkit.WebView;


import net.people.hybridlib.param.HybridParamShowLoading;

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
