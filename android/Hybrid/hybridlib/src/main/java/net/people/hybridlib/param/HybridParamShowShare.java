package net.people.hybridlib.param;

/**
 * Created by vane on 16/6/6.
 */

public class HybridParamShowShare {

    /**
     * title : 分享标题
     * desc : 分享描述
     * image : http://medlinker.com/h5/interlocution/static/img/icon-camera.png
     * link : http://medlinker.com
     */

    public String title;
    public String desc;
    public String image;
    public String link;

    @Override
    public String toString() {
        return "HybridParamShowShare{" +
                "title='" + title + '\'' +
                ", desc='" + desc + '\'' +
                ", image='" + image + '\'' +
                ", link='" + link + '\'' +
                '}';
    }
}
