package net.people.hybridlib.action;

import android.util.Log;
import android.webkit.WebView;


import net.people.hybridlib.param.HybridParamAjax;

import de.greenrobot.event.EventBus;

/**
 * ajax 的get 请求回调
 * <p>
 * 具体参数回调到 HybridWebViewActivity 或 HybridWebViewFragment 中
 */

public class HybridActionAjaxGet extends HybridAction {

    @Override
    public void onAction(WebView webView, String params, String jsmethod) {
        Log.e("Ajax Get", "onAction: " + params);
        HybridParamAjax hybridParam = mGson.fromJson(params, HybridParamAjax.class);
        hybridParam.callback = jsmethod;
        Log.e("Ajax Get", "onAction: " + hybridParam);
        EventBus.getDefault().post(hybridParam);

    }
}
