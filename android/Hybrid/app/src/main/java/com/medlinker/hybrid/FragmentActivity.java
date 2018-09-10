package com.medlinker.hybrid;

import android.graphics.Color;
import android.net.Uri;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;


import net.people.hybridlib.core.HybridConstant;
import net.people.hybridlib.ui.frag.HybridWebViewFragment;
import net.people.hybridlib.widget.DraweeView;


public class FragmentActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_fragment);

//        DraweeView iconView = (DraweeView) findViewById(R.id.dv);
//        iconView.setImageURI(Uri.parse("http://images2015.cnblogs.com/blog/294743/201511/294743-20151102143118414-1197511976.png"));

        String url = getIntent().getStringExtra("url");
        Bundle bundle = new Bundle();
        bundle.putString(HybridConstant.INTENT_EXTRA_KEY_TOPAGE,url);
        HybridWebViewFragment fragment = HybridWebViewFragment.newInstance(bundle);
        FragmentTransaction transaction = getSupportFragmentManager().beginTransaction();
        transaction.replace(R.id.cont,fragment);
        transaction.commit();
    }
}
