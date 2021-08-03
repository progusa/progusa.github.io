import another_file

class Num:
    def getNumber(self):
        a = 10
        return a

    def add(self, a, b):
        return a + b

    def swap(self, a, b):
        return b, a

def main():
    obj = Num()
    a = [1022, 20]
    b = [20, 10]
    c = a.__contains__(21)
    print("This is a class num", c)
    another_file.person.hi()

if __name__== "__main__" :
    main()