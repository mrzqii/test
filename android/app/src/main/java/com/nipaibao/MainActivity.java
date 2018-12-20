package com.nipaibao;
import org.devio.rn.splashscreen.SplashScreen; 
import android.os.Bundle;
import com.facebook.react.ReactActivity;
// import android.util.Log;

public class MainActivity extends ReactActivity {
    @Override
     protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // 展示启动页设置代码
        super.onCreate(savedInstanceState);
        // Log.e("test", "test");
    }
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "nipaibao";
    }
    
}
