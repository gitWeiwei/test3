package com.csdn.net.modifier;

import java.util.ArrayList;

public class FinalModifier {
	public  final int index = 1;

	public  final String name="1";
	
	

	public  int getIndex() {
		return index;
	}

	

	public  String getName() {
		return name;
	}

	

	/*new myInterface(){
		
	}*/
	
	/*public static void main(String[] args) {
		//FinalModifier.setIndex(1);
	//	System.out.println(FinalModifier.getIndex());
		//FinalModifier.setIndex(2);
		//System.out.println(FinalModifier.getIndex());
		
		//FinalModifier.setName("name1");
		//System.out.println(FinalModifier.getName());
		//FinalModifier.setName("name2");
		//System.out.println(FinalModifier.getName());
	}*/
	
	public static void main(String[] args) {

        final ArrayList<Integer> list = new ArrayList<Integer>();
        ArrayList<Integer> list02 = new ArrayList<Integer>();
        for(int x=0;x<100;x++){
            list.add(x);
        }
        new Thread(new Runnable() {
            @Override
            public void run() {
                for(Integer in:list){
                    System.out.println(Thread.currentThread().getId()+":"+in);
                }
            }
        }).start();
        list.add(101);
        list.add(1002);
        list.add(1003);
        list.add(1004);
        System.out.println("main thread is over");
    }
	
}
