package com.csdn.net.classLoader;

import org.junit.Test;

public class ClassLoaderTest {
	@Test
	public void test(){
		System.out.println(SubClass.value);//被动引用1：   子类 调用父类的静态方法，子类不会被初始化，只有父类被初始化，静态字段，只有直接定义这个字段的类才会被初始化
		SubClass[] sca = new SubClass[10];//被动引用2： 通过数组定义引用类，不会触发类的初始化
	    System.out.println(SubClass.helloWorld);//被动引用3：调用常量不触发累的初始化
		/*result:
	     *  superClass init
		    123
		    hello world
		*/

	}
}
class SuperClass{
	static{
		System.out.println("superClass init");
	}
	public static int value = 123;
}
class SubClass extends SuperClass{
	public static final String helloWorld = "hello world";
	static{
		System.out.println("subClass init");
	}
}

