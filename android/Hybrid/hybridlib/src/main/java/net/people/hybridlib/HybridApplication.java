package net.people.hybridlib;

import android.app.Application;

import com.facebook.drawee.backends.pipeline.Fresco;

/**
 * Created by yhgao on 2018/2/27.
 */

public class HybridApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        // 初始化图片加载框架
        Fresco.initialize(this);
    }
}
