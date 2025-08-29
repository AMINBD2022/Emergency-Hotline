1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans : getElementById : আইডি হল এমন একটি জাভাস্ক্রিপ সিলেক্টর যার মাধ্যমে শুধুমাত্র একটি এলিমেন্ট সিলেক্ট হয় এবং সেটি সিঙ্গেল ভ্যালু রিটার্ন করে | 
getElementsByClassName : হল জাভাস্ক্রিপ্টের এমন একটি সিলেক্টর যার মাধ্যমে সেম ক্লাস এর সকল এলিমেন্ট কে সিলেক্ট  করা হয়ে যায় এবং ভ্যালু হিসাবে HTML Collection রিটার্ন করে | এবং তার মধ্যে for of Loop চালিয়ে একটি একটি ভ্যালু access    করা যায় |এটি Array Like object এর মতন কাজ করে | 
querySelector  : এইটি CSS  selector এর মত কাজ করে অর্থাৎ querySelector  দিয়ে CSS এর মত যে কোন কিছুকে Select  করা যায় তবে এটি সেম  Class / id / tagName এর প্রথম টিকে শুধুমাত্র সিলেক্ট করে এবং সিঙ্গেল ভ্যালুকার রিটার্ন করে | অর্থাৎ সেম নামে যদি  একাধিক  ক্লাস অথবা যাই থাকুক না কেন তার মধ্য থেকে প্রথম  যেটি পাবে  সে তাকেই ধরবে |

querySelectorAll :  Css সিলেক্টরের মতোই কাজ করে তবে তার মধ্যে পার্থক্য হল যে querySelector  শুধুমাত্র সেম Things এর প্রথমটিকে ধরবে আর querySelectorAll  Same Items যতগুলো পাবে সবগুলোকে একসাথে ধরবে এবং সে সব আইটেমকে একসাথে nodeList  হিসাবে রিটান করে |

2. How do you **create and insert a new element into the DOM**?

Ans : জাভাস্ক্রিপ দিয়ে সাধারণত কোন একটি New  Element Create করার জন্য  .createElement() Method ব্যবহার করা হয় এবং সেটাকে insert করার জন্য .appendChild Method ব্যবহার করা হয় | 

3. What is **Event Bubbling** and how does it work?
Ans : Event বাবলিং হল কোন একটা element এর মধ্যে যখন event tigger করা হয় তখন সেটি প্রথমে সেই এলিমেন্ট এর মধ্যে ঘটে তারপর তার প্যারেন্টের মধ্যে তারপর তার প্যারেন্টের মধ্যে এভাবে পর্যায়ক্রমে উপরের দিকে সেটা বাবল হয় অর্থাৎ নদীতে মাছ ফেনা ছাড়লে যেরকম ধীরে ধীরে উপর দিকে উঠে, ঠিক ঐরকম ভাবেই Event bubbling  ও কাজ করে এটা পর্যায়ক্রমে উপরের দিকে যাইতে থাকে |


4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans : আমরা সাধারণত Event listener  এড করি child এলিমেন্ট এর মধ্যে অর্থাৎ যেই এলিমেন্ট এ ক্লিক করলে কোন কিছু ঘটবে সেই এলিমেন্ট এর মধ্যে আমরা সাধারণত Event listener Add করি তবে Event delegation  হল সরাসরি child element এ Event listener অ্যাড না করে  তার প্যারেন্টের মধ্যে ইভেন্ট এড করা এবং ইভেন্ট বাবলিং এর মাধ্যমে সেটি কাজ করে|  এটাই হল event delegation এবং এটি জাভাস্ক্রিপ্ট  এর মধ্যে খুবই ইউজফুল এবং পাওয়ারফল একটি System. কারণ হলো যখন DOM এর মাধ্যমে কোন একটা নতুন এলিমেন্ট Add হবে সেটার মধ্যে আলাদাভাবে কোন Event listener এড না করেও ইভেন্ট ঠিকভাবে কাজ করে এই event Delegation এর মাধ্যমে | তাই এটি জাভাস্ক্রিপ্টে খুবই ইউজফুল | 
তাছাড়া Event Delegation এর আরোও বড়  একটি সুবিধা হল কোড বারবার রিপিট হয় না এবং Code অনেক ছোট এবং Readable হয়

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans : preventDefault() : এটির মাধ্যমে এলিমেন্ট এর ব্রাউজার ডিফল্ট যে বিহেবিয়ার গুলো আছে সেগুলো বন্ধ হয়ে যায় | অর্থাৎ preventDefault() ব্যবহার করলে এলিমেন্টে ব্রাউজার ডিফল্ট বিহেবিয়ার সেগুলো আর কাজ করে না তবে ইভেন্ট ক্যাপচারিং বা বাবলিং হবে এতে কোন সমস্যা হবে না | তবে stopPropagation()  দ্বারা ব্রাউজার default behavior বন্ধ হবে না | কিন্তু ইভেন্ট অন্য কোন এলিমেন্টে  ছড়াবে না অর্থাৎ শুধুমাত্র সেই এলিমেন্ট এর মধ্যেই কাজ করবে বাবলিং বা ক্যাপচারিং কিছুই হবে না |