import math
Y = []
X = []

def f(x):
    return (1.5 * math.sqrt(14 * x + 0.304 * x**2))
for x in range(0, 101):
    y = f(x)
    Y.append(y)
    X.append(x)

for i in range(len(X)):
    print(X)
    print(Y)
    print(len(X), ' ', len(Y))
for i in range(len(X)):
    print(str(Y[i]) + '%' + '{' + 'content: ' + "'" + str(X[i]) + "'" + '}')