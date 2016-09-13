package com.csdn.net.test;

import org.junit.Test;

public class Sort {

	/*
	 * 代码
	 * 
	 * Code highlighting produced by Actipro CodeHighlighter
	 * (freeware)http://www.CodeHighlighter.com/-->/** 选择排序<br/>
	 * <li>在未排序序列中找到最小元素，存放到排序序列的起始位置</li>
	 * <li>再从剩余未排序元素中继续寻找最小元素，然后放到排序序列末尾。</li> <li>以此类推，直到所有元素均排序完毕。</li>
	 * 
	 * 
	 * @param numbers
	 */
	public static void selectSort(int[] numbers) {
		int size = numbers.length, temp;
		for (int i = 0; i < size; i++) {
			int k = i;
			for (int j = size - 1; j > i; j--) {    // i = 0 ; k=0;													2
				if (numbers[j] < numbers[k]){       // j= 3
					k = j;						    //进入for循环 最后一个元素9 与第一个元素2 比较  9<2  9 <1 9<5不执行赋值操作
				}
			}
			temp = numbers[i];                     //temp=2 ;number[0] = number[0];number[0] = number[i];
			numbers[i] = numbers[k];
			numbers[k] = temp;
		}
		for(int x = 0 ; x<numbers.length;x++){
			System.out.println(numbers[x]);
		}
	}
	
	public static void insertSort(int[] numbers) {   
        int size = numbers.length, temp, j;   
        for (int i = 1; i < size; i++) {   
            temp = numbers[i];   
            for (j = i; j > 0 && temp < numbers[j - 1]; j--)   
                numbers[j] = numbers[j - 1];   	
            numbers[j] = temp;   
        }  
        for(int x = 0 ; x<numbers.length;x++){
			System.out.println(numbers[x]);
		}
    }   

	@Test
	public void test() {
		int[] numbers =  new int[] { 2, 1, 5, 9};
		//selectSort(numbers);
		insertSort(numbers);
	}
}
