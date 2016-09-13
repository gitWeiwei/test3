package com.csdn.net.test;

import java.io.File;
import java.util.Iterator;
import java.util.List;

import org.dom4j.Attribute;
import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;
import org.junit.Test;

public class XmlUtil {
	public static Element getElement() {
		Element element = null;
		SAXReader sax = new SAXReader();// 创建一个SAXReader对象
		File xmlFile = new File("src/modules/struts.xml");// 根据指定的路径创建file对象
		try {
			Document document = sax.read(xmlFile);
			element = document.getRootElement();
		} catch (DocumentException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
		return element;
	}
	public static String getValue(String name){
		String className = null;
        if(name!=null && name!=""){
        	if(getElement().attributeValue("name").equals(name)){
        		className = getElement().attributeValue("class");
        	}
        }
		return className;
	}
	public static String getRootName(String rootName,String rootValue){
		String value =null;
		if(rootName!=null && rootName!=""){
			Element root = getElement();
			for (Iterator iter = root.elementIterator(); iter.hasNext();) {
				Element element = (Element) iter.next();
				if(element.getName().equals(rootName)){
					if(element.attributeValue("name").equals(rootValue)){
						value = element.getTextTrim();
					}
				}
			}
		}
		return value;
	}
	public void getNodes(Element node){  
	    System.out.println("--------------------");  
	      
	    //当前节点的名称、文本内容和属性  
	    System.out.println("当前节点名称："+node.getName());//当前节点名称  
	    System.out.println("当前节点的内容："+node.getTextTrim());//当前节点名称  
	    List<Attribute> listAttr=node.attributes();//当前节点的所有属性的list  
	    for(Attribute attr:listAttr){//遍历当前节点的所有属性  
	        String name=attr.getName();//属性名称  
	        String value=attr.getValue();//属性的值  
	        System.out.println("属性名称："+name+"属性值："+value);  
	    }  
	      
	    //递归遍历当前节点所有的子节点  
	    List<Element> listElement=node.elements();//所有一级子节点的list  
	    for(Element e:listElement){//遍历所有一级子节点  
	        this.getNodes(e);//递归  
	    }  
	}  
	@Test
	public void test(){
		getNodes(getElement());
	}
}
