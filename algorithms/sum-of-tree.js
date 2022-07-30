const tree = [
  {
    v: 5,
    c: [
      {
        v: 5,
      },
      {
        v: 10,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 11,
        c: [
          {
            v: 12,
            c: [
              {
                v: 5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    v: 5,
    c: [
      {
        v: 7,
      },
      {
        v: 12,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 14,
      },
    ],
  },
];

function sumOfTreeRecursive(tree) {
  let result = 0;

  for (let obj of tree) {
    result += obj.v;

    if (obj.c) {
      result += sumOfTreeRecursive(obj.c);
    }
  }

  return result;
}

console.log("Рекурсивно", sumOfTreeRecursive(tree)); // 108

function sumOfTreeQueue(tree) {
  let result = 0;

  const queue = [...tree];

  while (queue.length) {
    const current = queue.shift();

    result += current.v;

    if (current.c) queue.push(...current.c);
  }

  return result;
}

console.log("Очередь", sumOfTreeQueue(tree)); // 108
