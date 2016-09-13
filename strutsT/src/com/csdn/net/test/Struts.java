package com.csdn.net.test;

import java.beans.PropertyDescriptor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Iterator;
import java.util.Map;

public class Struts {

	 public static View runAction(String actionName, Map<String, Object> parameters){
        View v = new View();
        String className = XmlUtil.getValue(actionName);
        try {
			Class c = Class.forName(className);
			Object obj = c.newInstance();
			Method methods[] = c.getMethods();
			//System.out.println(parameters.get("name")+"!!!!!actionName:"+actionName);
			
			String keyName = "";
			String keyValue = "";
			for(int i = 0 ; i<methods.length;i++){
			//	System.out.println(methods[i].getName()+"<<<<<<<<<<");
				Iterator it = parameters.entrySet().iterator();
				while(it.hasNext()){
					Map.Entry e = (Map.Entry) it.next();
					keyName = e.getKey().toString().substring(0,1).toUpperCase()+e.getKey().toString().substring(1);
					keyValue = e.getValue().toString();
					//System.out.println("set"+keyName +">>>>"+methods[i].getName());
					if(("set"+keyName).equals(methods[i].getName())){
						methods[i].invoke(obj, new Object[]{keyValue});
						// System.out.println("method：："+methods[i].getName()+"：：：key:"+keyName+"=====value:::"+keyValue);
						//System.out.println("======:"+methods[i].invoke(obj, new Object[]{keyValue}).toString());
					}
				}
			}
			//调用execute方法
			 Method m1 = c.getDeclaredMethod("execute");
			 String returnMessage = (String)m1.invoke(obj,null);
			 Field fields[] = obj.getClass().getDeclaredFields();
			 for(Field f : fields){
				 PropertyDescriptor pd = new PropertyDescriptor(f.getName(), c);
				 Method getMethod = pd.getReadMethod();
				 Object o = getMethod.invoke(obj);
				 keyName = getMethod.getName().replace("get", "").substring(0, 1).toLowerCase()+getMethod.getName().replace("get", "").substring(1);
				 parameters.put(keyName, o);
			 }
			v.setParameters(parameters);
			String value = XmlUtil.getRootName("result",returnMessage);
			if(value!=null){
				v.setJsp(value);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		//读取配置文件struts.xml
		//根据actionName找到相对应的class ， 例如LoginAction, 通过反射实例化（创建对象）
		//根据parameters中的数据，调用对象的setter方法， 例如parameters中的数据是 ("name"="liuxin" , "password"="1234") , 那就应该调用 setName和setPassword方法
		//通过反射调用对象的exectue 方法， 并获得返回值，例如"success"
		//通过反射找到对象的所有getter方法（例如 getMessage）, 通过反射来调用， 把值和属性形成一个HashMap , 例如 {"message": "登录成功"} , 放到View对象的parameters
		//根据struts.xml中的 <result> 配置,以及execute的返回值， 确定那一个jsp， 放到View对象的jsp字段中。
	  return v;	
	 }
}
