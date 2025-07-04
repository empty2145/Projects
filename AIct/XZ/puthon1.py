def Min(m, k, p):
    minn = m 
    if minn > k:
        minn = k
    if minn > p:
        minn = p
    return minn

a = int(input())
b = int(input())
c = int(input())
print('min is', Min(a, b, c))