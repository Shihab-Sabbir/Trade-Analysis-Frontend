export default function capitalize(word: string): string {
  return word.replace(/^[a-z]/, match => match.toUpperCase());
}

// Example usage:
// const inputWord: string = 'example';
// const capitalizedWord: string = capitalize(inputWord);
// console.log(capitalizedWord); // Output: "Example"
