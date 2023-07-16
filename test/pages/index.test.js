describe("Testing function sample", () => {
  test('the function should filter a input "name" in "arr" given both', () => {
    const input = [{ id: 1, name: "Patricia" },{ id: 2, name: "Lola" },{ id: 3, name: "Julieta" }];
    const output = [{ id: 1, name: "Patricia" }];

    expect(filterUsers(input, "Patricia")).toEqual(output);
  });
});

const filterUsers = (arr, name) => {
  return arr.filter((user) => {
    return user.name.match(name);
  });
};