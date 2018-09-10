package net.people.hybridlib.core;

import android.webkit.JavascriptInterface;


import net.people.hybridlib.param.HybridParamBack;

import de.greenrobot.event.EventBus;

/**
 * Created by vane on 16/7/9.
 */

public class HybridJsInterface {

    @JavascriptInterface
    final public void stringByEvaluatingJavaScriptFromString(String tagname, String value) {
        if (!"true".equals(value) && "back".equals(tagname)) {
            EventBus.getDefault().post(new HybridParamBack());
        }
    }
}
