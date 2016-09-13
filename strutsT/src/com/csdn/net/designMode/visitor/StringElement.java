package com.csdn.net.designMode.visitor;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class StringElement implements Visitable{

	@Override
	public void acceppt(Vistor vistor) {
		vistor.visit(new StringElement());
	}

	public void visitStringElement() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void visit(Object o) {  
	    String className = o.getClass().getName(); //获取类名称，这里是包含包名的全称  
	    String methodName = "visit"+className.substring(className.lastIndexOf(".")+1);//组合获取方法名称  
	    try {  
	        //根据方法名从该类中获取相应的方法  
	        Method m = this.getClass().getMethod(methodName, new Class[]{o.getClass()});  
	        m.invoke(this, new Object[]{o});  
	    } catch (NoSuchMethodException e) {  
	    	 e.printStackTrace();  
	    } catch (InvocationTargetException e) {  
	        e.printStackTrace();  
	    } catch (IllegalAccessException e) {  
	        e.printStackTrace();  
	    }  
	}  

}
