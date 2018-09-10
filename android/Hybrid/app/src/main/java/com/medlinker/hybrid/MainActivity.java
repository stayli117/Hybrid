package com.medlinker.hybrid;


import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

import net.people.hybridlib.action.HybridAction;
import net.people.hybridlib.core.HybridConfig;
import net.people.hybridlib.core.HybridConstant;
import net.people.hybridlib.param.HybridParamForward;


public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        findViewById(R.id.enter_h5).setOnClickListener(this);
        findViewById(R.id.enter_native).setOnClickListener(this);
        findViewById(R.id.enter_frag).setOnClickListener(this);
        jump();
    }

    @Override
    public void onClick(View v) {
        String url = null;
        switch (v.getId()) {
            case R.id.enter_h5:
//                url = "http://kq.medlinker.com/webapp/kq-desk/login.html";
//                url = "http://kq.medlinker.com/webapp/kq-desk/admorgs.html";
//                url = "http://yexiaochai.github.io/blade/demo/debug.html";
//                url = "http://192.168.180.33:3456/webapp/demo/index.html";
                 url = "http://172.16.0.179:3456/#!/main.html";

                break;
            case R.id.enter_native:
                url = "http://yexiaochai.github.io/Hybrid/webapp/demo/index.html";
                url = "https://h5.ele.me/hongbao/?from=singlemessage#hardware_id=&is_lucky_group=True&lucky_number=10&track_id=&platform=0&sn=10e54c7f15843093&theme_id=1969&device_id=";
//                url = "http://192.168.180.66:3456/index.html";
                url = "http://172.16.0.179:3456/#!/main.html";
                break;

            case R.id.enter_frag:
                url = "http://yexiaochai.github.io/Hybrid/webapp/demo/index.html";
                url = "http://172.16.0.162:3456/webapp/demo/index.html";
                url = "http://172.16.0.179:3456/#!/main.html";
                Intent intent = new Intent(this, FragmentActivity.class);
                intent.putExtra("url", url);
                startActivity(intent);
                return;
        }

        Intent intent = new Intent(this, DemoMainActivity.class);
        intent.putExtra("url", url);
        startActivity(intent);
    }

    private void jump() {
        Uri data = getIntent().getData();
        if (null == data) return;
        String url = data.toString();
        Uri parse = Uri.parse(url);
        String scheme = parse.getScheme();
        if (HybridConfig.SCHEME.equals(scheme)) {
            String param = parse.getQueryParameter(HybridConstant.GET_PARAM);
            onAction(param);
        }
    }

    private void onAction(String params) {

        HybridParamForward hybridParam = HybridAction.mGson.fromJson(params, HybridParamForward.class);
//        Bundle bundle = new Bundle();
//        bundle.putString(HybridConstant.INTENT_EXTRA_KEY_TOPAGE, hybridParam.topage);
//        bundle.putSerializable(HybridConstant.INTENT_EXTRA_KEY_ANIMATION, hybridParam.animate);
//        bundle.putBoolean(HybridConstant.INTENT_EXTRA_KEY_HASNAVGATION, hybridParam.hasnavgation);
//        ActivityUtil.toSimpleActivity(this, HybridWebViewActivity.class, hybridParam.animate, bundle);


//        switch (hybridParam.type) {
//            case NATIVE:
//                Uri uri = Uri.parse(HybridConfig.SCHEME + "://" + hybridParam.topage);
//                Intent intent = new Intent(HybridConfig.ACTIONPRE + uri.getHost());
//                Set<String> names = uri.getQueryParameterNames();
//                if (null != names && !names.isEmpty()) {
//                    Iterator<String> iterator = names.iterator();
//                    while (iterator.hasNext()) {
//                        String next = iterator.next();
//                        intent.putExtra(next, uri.getQueryParameter(next));
//                    }
//                }
//                ActivityUtil.toActivity(this, intent, hybridParam.animate);
//                break;
//            case H5:
//                Bundle bundle = new Bundle();
//                bundle.putString(HybridConstant.INTENT_EXTRA_KEY_TOPAGE, hybridParam.topage);
//                bundle.putSerializable(HybridConstant.INTENT_EXTRA_KEY_ANIMATION, hybridParam.animate);
//                bundle.putBoolean(HybridConstant.INTENT_EXTRA_KEY_HASNAVGATION, hybridParam.hasnavgation);
//                ActivityUtil.toSimpleActivity(this, HybridWebViewActivity.class, hybridParam.animate, bundle);
//                break;
//        }

    }
}
