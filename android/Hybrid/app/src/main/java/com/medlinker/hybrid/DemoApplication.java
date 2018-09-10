package com.medlinker.hybrid;

import android.app.Application;

import net.people.hybridlib.HybridApplication;

/**
 * Created by vane on 16/6/6.
 */

public class DemoApplication extends HybridApplication {

    @Override
    public void onCreate() {
        super.onCreate();
//        Stetho.initializeWithDefaults(this);
    }
}
