package net.people.hybridlib;

import net.people.hybridlib.param.HybridParamAjax;
import net.people.hybridlib.param.HybridParamBack;
import net.people.hybridlib.param.HybridParamShowHeader;
import net.people.hybridlib.param.HybridParamShowLoading;
import net.people.hybridlib.param.HybridParamShowShare;
import net.people.hybridlib.param.HybridParamUpdateHeader;
import net.people.hybridlib.param.IHybridParam;

/**
 * Created by yhgao on 2018/3/2.
 */

public class Hybrid {

    private IHybridAction mAction;

    private interface HOLDER {
        Hybrid HYBRID = new Hybrid();
    }

    public static Hybrid getInstance() {
        return HOLDER.HYBRID;
    }

    public void register(IHybridAction action) {
        mAction = action;
    }

    public void poset(IHybridParam param) {
        if (mAction!=null){
//            mAction.onEventMainThread(param);
        }

    }


    void tet(){
        register(new IHybridAction() {
            @Override
            public void onEventMainThread(HybridParamBack msg) {

            }

            @Override
            public void onEventMainThread(HybridParamShowLoading msg) {

            }

            @Override
            public void onEventMainThread(HybridParamShowHeader msg) {

            }

            @Override
            public void onEventMainThread(HybridParamShowShare msg) {

            }

            @Override
            public void onEventMainThread(HybridParamAjax msg) {

            }

            @Override
            public void onEventMainThread(HybridParamUpdateHeader msg) {

            }
        });
    }
}
