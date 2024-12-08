def count_xmas_occurrences(grid):
    rows = len(grid)
    cols = len(grid[0])
    target = "XMAS"
    reversed_target = target[::-1]  # "SAMX"
    target_length = len(target)

    count = 0

    # Horizontal check
    for row in grid:
        count += row.count(target)
        count += row.count(reversed_target)

    # Vertical check
    for col in range(cols):
        column_str = "".join(grid[row][col] for row in range(rows))
        count += column_str.count(target)
        count += column_str.count(reversed_target)

    # Diagonal check (top-left to bottom-right)
    for r in range(rows - target_length + 1):
        for c in range(cols - target_length + 1):
            # Check the diagonal starting at (r, c)
            diag_str = "".join(grid[r + i][c + i] for i in range(target_length))
            if diag_str == target or diag_str == reversed_target:
                count += 1

    # Diagonal check (top-right to bottom-left)
    for r in range(rows - target_length + 1):
        for c in range(target_length - 1, cols):
            # Check the diagonal starting at (r, c)
            diag_str = "".join(grid[r + i][c - i] for i in range(target_length))
            if diag_str == target or diag_str == reversed_target:
                count += 1

    return count


def read_grid_from_file(file_path):
    with open(file_path, "r") as file:
        # Read all lines and remove any extra whitespace like newline characters
        grid = [line.strip() for line in file.readlines()]
    return grid


# File path to the input file
file_path = "input.txt"

# Read the grid from the input file
grid = read_grid_from_file(file_path)

# Calling the function and printing the result
result = count_xmas_occurrences(grid)
print(f"XMAS appears {result} times.")
