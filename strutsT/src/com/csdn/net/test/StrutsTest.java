package com.csdn.net.test;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

import org.junit.Assert;
import org.junit.Test;

public class StrutsTest {

	@Test
	public void testRunActionSuccess() {
		String actionName = "login";
		Map params = new HashMap();
		params.put("name", "liuxin");
		params.put("password", "1234");
     // System.out.println(params.get("name")+"!!!!!");
		View view = Struts.runAction(actionName, params);
		//System.out.println("end_jsp:::" + view.getJsp() + "================");
		Assert.assertEquals("/jsp/homepage.jsp", view.getJsp());
		Assert.assertEquals("login successful", view.getParameters().get("msg"));
	}

	@Test
	public void testRunActionFailed() {
		String actionName = "login";
		Map params = new HashMap();
		params.put("name", "liuxin");
		params.put("password", "123456"); // 密码和预设的不一致

		View view = Struts.runAction(actionName, params);

		Assert.assertEquals("/jsp/showLogin.jsp", view.getJsp());
		Assert.assertEquals("login failed,please check your user/pwd", view.getParameters().get("msg"));
	}

}
