export default (extraAllocation, totalScore, partialTokenAllocation) => {
  let tokensAllocatedString, tokensProjectedString;
  const tokensAllocated = extraAllocation;
  const tokensProjected = totalScore * partialTokenAllocation;

  if(tokensAllocated !== undefined || tokensAllocated !== null){
    tokensAllocatedString = `${tokensAllocated.toFixed(2)}`
  }else {
      tokensAllocatedString = '-';
  }

  if(tokensProjected !== undefined || tokensAllocated !== null) {
      tokensProjectedString = `${tokensProjected.toFixed(2)}`;
  }else {
      tokensProjectedString = '-';
  }

  return `${tokensAllocatedString}% / ${tokensProjectedString}%`
}