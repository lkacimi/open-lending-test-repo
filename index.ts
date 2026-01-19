function calculateSum(numbers: any) {
  let total = 0;
  // Performance issue: a simple reduce would be cleaner
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

// 2. Type mistake: initializing a number as a string
const [count, setCount] = useState<string>(0);

// 3. Lack of error handling for a potential API call
async function fetchData(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// 4. Unused variable and poor naming convention
const unusedVariable = "I am not used anywhere";
const temp_data = [1, 2, 3];

// 5. Missing JSDoc comments for public functions
export function multiply(a: number, b: number): number {
  return a * b;
}

// Example usage to avoid linting errors for the functions
calculateSum([1, 2, 3]);
fetchData("https://api.example.com").catch(console.error);
setCount("1");
console.log(multiply(2, 3));
console.log(temp_data);
