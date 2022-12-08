import numpy as np
import pandas as pd
from collections import defaultdict
import json

#Data processing (csv to list, cleaning of data)
df = pd.read_csv("market_data.csv", header=None)
df.isnull().sum() #column wise missing values (NaN)
df.values.tolist()
T = []
for i in range(len(df)): # all the nan r in string format now. later added the nan to remove from list
    T.append([str(df.values[i, j]) for j in range(0, 4) if str(df.values[i,j])!='nan'])
# print(T)

#ML algorithm
from apyori import apriori
rules = apriori(T, min_support=0.03, min_confidence=0.35, min_lift=3, min_length=2)
x = list(rules)

# print(x)
#output:
#RelationRecord(items=frozenset({'COFEE', 'CORNFLAKES'}), support=0.05263157894736842, 
# ordered_statistics=[OrderedStatistic(items_base=frozenset({'COFEE'}), items_add=frozenset({'CORNFLAKES'}), 
# confidence=1.0, lift=3.166666666666667)])  

keys = []
valuelist = []
for i in range(len(x)):
    # get items
    # y = x[i].items #.support gives all support values
    # y = list(y)
    # print(y)
    # items_base - what I have in cart, items_add - what I may add
    x1 = list(x[i].ordered_statistics[0].items_base)[0]
    keys.append(x1)
    y1 = list(x[i].ordered_statistics[0].items_add)
    valuelist.append(y1)

# dictionary part
data = defaultdict(list)

for i in range(len(x)):
    key = keys[i]
    for j in range(len(valuelist[i])):
        data[key].append(valuelist[i][j])


# for i in range(len(data.items())):
#     print(list(data.items())[i][0]) # keys
#     print([*set(list(data.items())[i][1])]) # list with unique values

dict = {}

for i in range(len(data.items())):
    key = list(data.items())[i][0]
    value = [*set(list(data.items())[i][1])]
    dict[key]=value

print(dict)

with open("recommendation.json", "w") as outfile:
    json.dump(dict, outfile)