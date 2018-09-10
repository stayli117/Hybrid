package net.people.hybridlib.action;
import android.webkit.WebView;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import net.people.hybridlib.param.HybridParamAnimation;
import net.people.hybridlib.param.HybridParamType;


/**
 *
 * 定义 混合应用的参数 - 动作 抽象类
 *
 * 所以动作 均通过 onAction 方法回调
 */
public abstract class HybridAction{
    // 初始化Gson
    public static Gson mGson;
    static {
        mGson = new GsonBuilder()
                .registerTypeAdapter(HybridParamAnimation.class, new HybridParamAnimation.TypeDeserializer())
                .registerTypeAdapter(HybridParamType.class, new HybridParamType.TypeDeserializer())
                .create();
    }

    public abstract void onAction(WebView webView, String params, String jsmethod);

}
