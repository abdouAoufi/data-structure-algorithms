import java.util.ArrayList;

public class Selection {

   static java.util.ArrayList<Integer> selctionSort(java.util.ArrayList<Integer> array) {
      int currentIteration = 0;
      int minimum = 100;
      while (currentIteration < array.size()) {
         
         for (int i = currentIteration; i < array.size(); i++) {
            if (minimum > array.get(i)) {
               minimum = array.get(i);
            }
         }
         int indexOfMinimum = array.indexOf(minimum);
         int temp = array.indexOf(currentIteration);
         System.out.println(minimum);
         array.set(currentIteration, minimum);
         array.set(indexOfMinimum, temp);
         minimum = 100;
         currentIteration++;
      }
      return array;
   }

   public static void main(String[] str) {
      java.util.ArrayList<Integer> arr = new java.util.ArrayList<>();
      arr.add(4);
      arr.add(3);
      arr.add(2);
      arr.add(1);
      var result = selctionSort(arr);
      for(int i = 0 ; i < result.size() ; i++){
         System.out.println(result.get(i));
      }

   }
}