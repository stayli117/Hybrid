package net.people.hybridlib.widget;

import android.content.Context;
import android.graphics.Canvas;
import android.util.AttributeSet;
import android.util.Log;
import android.webkit.WebView;

/**
 * Created by vane on 16/6/7.
 */

public class HybridWebView extends WebView {
    private static final String TAG = "HybridWebView";
    public HybridWebView(Context context) {
        super(context);
    }

    public HybridWebView(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public HybridWebView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }
    //onDraw表示显示完毕
    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
//        Log.e(TAG, "onDraw: 显示完成" );
    }
}
