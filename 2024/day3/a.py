import re

FILE_PATH = "input.txt"


def calculate_mul_sum_from_file():
    # Read the input from the file
    with open(FILE_PATH, "r") as file:
        corrupted_memory = file.read()

    # Regular expression to match valid mul instructions
    mul_pattern = r"mul\((\d{1,3}),(\d{1,3})\)"
    do_pattern = r"do\(\)"
    dont_pattern = r"don't\(\)"

    pattern = f"{mul_pattern}|{do_pattern}|{dont_pattern}"

    matches = re.finditer(pattern, corrupted_memory)

    enabled = True
    total_sum = 0

    for match in matches:
        if match.group(1) and match.group(2) and enabled:
            total_sum += int(match.group(1)) * int(match.group(2))
        elif match.group(0) == "do()":
            enabled = True
        elif match.group(0) == "don't()":
            enabled = False

    return total_sum


# Compute the result
result = calculate_mul_sum_from_file()
print(f"The total sum of valid mul instructions is: {result}")
