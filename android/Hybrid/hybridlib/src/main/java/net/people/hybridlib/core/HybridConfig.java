package net.people.hybridlib.core;



import net.people.hybridlib.R;
import net.people.hybridlib.action.HybridActionAjaxGet;
import net.people.hybridlib.action.HybridActionAjaxPost;
import net.people.hybridlib.action.HybridActionBack;
import net.people.hybridlib.action.HybridActionForward;
import net.people.hybridlib.action.HybridActionShowHeader;
import net.people.hybridlib.action.HybridActionShowLoading;
import net.people.hybridlib.action.HybridActionShowShare;
import net.people.hybridlib.action.HybridActionUpdateHeader;

import java.util.HashMap;

/**
 *
 * hybrid 的基本操作配置
 */

public class HybridConfig {

    //    public static final String SCHEME = "hybrid";
    public static final String SCHEME = "medmedlinkerhybrid";
    public static final String ACTIONPRE = "medlinker.hybrid.";//配置是intent-filter中的action的前缀
    //    public static final String VERSION_HOST = "http://yexiaochai.github.io/Hybrid/webapp/hybrid_ver.json";
    public static final String VERSION_HOST = "http://h5.qa.medlinker.com";
    public static final String FILE_HYBRID_DATA_VERSION = "hybrid_data_version";
    public static final String FILE_HYBRID_DATA_PATH = "hybrid_webapp";
    public static final String JSInterface = "HybridJSInterface";


    public static class TagnameMapping {
        private static HashMap<String, Class> mMap;

        static {

            // 八个基本操作步骤
            mMap = new HashMap<>();
            mMap.put("forward", HybridActionForward.class);
            mMap.put("showheader", HybridActionShowHeader.class);
            mMap.put("updateheader", HybridActionUpdateHeader.class);
            mMap.put("back", HybridActionBack.class);
            mMap.put("showloading", HybridActionShowLoading.class);
            mMap.put("get", HybridActionAjaxGet.class);
            mMap.put("post", HybridActionAjaxPost.class);
            // 新增分享
            mMap.put("openNativeUI", HybridActionShowShare.class);

        }

        public static Class mapping(String method) {
            return mMap.get(method);
        }
    }

    // 提前预设的图片配置
    public static class IconMapping {
        private static HashMap<String, Integer> mMap;

        static {
            mMap = new HashMap<>();
            // 返回按钮
            mMap.put("back", R.drawable.ic_back);
        }

        public static int mapping(String icon) {
            boolean has = mMap.containsKey(icon);
            if (!has) return -1;
            return mMap.get(icon);
        }
    }
}
