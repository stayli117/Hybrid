package net.people.hybridlib.param;

import org.json.JSONObject;

import java.util.Map;

/**
 * Created by vane on 16/6/9.
 */

public class HybridParamAjax {

    public ACTION tagname = ACTION.GET;
    public String url;
    public Map<String,String> param;// this param is json data
    public String callback;

    public enum ACTION {
        GET("get"), POST("post");

        public String mValue;

        ACTION(String value) {
            mValue = value;
        }

        public static ACTION findByAbbr(String value) {
            for (ACTION currEnum : ACTION.values()) {
                if (currEnum.mValue.equals(value)) {
                    return currEnum;
                }
            }
            return GET;
        }
    }

    @Override
    public String toString() {
        return "HybridParamAjax{" +
                "tagname=" + tagname +
                ", url='" + url + '\'' +
                ", param=" + param +
                ", callback='" + callback + '\'' +
                '}';
    }
}
