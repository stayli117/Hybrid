package net.people.hybridlib;

import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.os.Build;
import android.text.TextUtils;
import android.view.View;
import android.view.animation.AnimationUtils;
import android.webkit.ValueCallback;
import android.widget.Toast;

import net.people.hybridlib.core.HybridAjaxService;
import net.people.hybridlib.core.HybridConfig;
import net.people.hybridlib.param.HybridParamAjax;
import net.people.hybridlib.param.HybridParamBack;
import net.people.hybridlib.param.HybridParamCallback;
import net.people.hybridlib.param.HybridParamShowHeader;
import net.people.hybridlib.param.HybridParamShowLoading;
import net.people.hybridlib.param.HybridParamShowShare;
import net.people.hybridlib.param.HybridParamUpdateHeader;
import net.people.hybridlib.ui.act.HybridWebViewActivity;
import net.people.hybridlib.widget.NavgationView;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Set;

import de.greenrobot.event.Subscribe;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

/**
 * Created by yhgao on 2018/3/2.
 */

public interface IHybridAction {

    /**
     * 返回通知
     *
     * @param msg
     */

    public void onEventMainThread(HybridParamBack msg);


    /**
     * 显示、隐藏loading
     *
     * @param msg
     */
    public void onEventMainThread(HybridParamShowLoading msg);

    /**
     * 显示、隐藏header通知
     *
     * @param msg
     */
    public void onEventMainThread(HybridParamShowHeader msg);

    /**
     * 分享操作
     *
     * @param msg
     */
    public void onEventMainThread(HybridParamShowShare msg);


    /**
     * ajax请求
     *
     * @param msg
     */
    public void onEventMainThread(HybridParamAjax msg);

    /**
     * 更新header通知
     *
     * @param msg
     */
    public void onEventMainThread(HybridParamUpdateHeader msg);


}
