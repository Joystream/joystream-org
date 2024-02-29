const endAlignedCols = ['rateOfTotalSupply', 'tokenAmount', 'rateOfTgeUnlock'];

export const shouldEndAlign = accessorKey => endAlignedCols.includes(accessorKey);
