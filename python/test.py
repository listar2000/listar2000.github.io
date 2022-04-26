from .helpers import add, divide, multiply, subtract


def test_add():
    return add(1, 2) == 3


def test_subtract():
    return subtract(2, 1) == 1


def test_multiply():
    return multiply(2, 2) == 4


def test_divide():
    return divide(4, 2) == 2
