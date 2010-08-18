#!/usr/bin/env python
# coding: utf-8
# Transliteration 
from unicodedata import normalize
import sys
import codecs
sys.stdout = codecs.getwriter('utf-8')(sys.stdout)

oswaltsubs = u"""
^h
ʰ

$
s\u030C

s'
s\u0313

7
t\u0323

?
ʔ

a'
a\u0301

i'
i\u0301

u'
u\u0301

o'
o\u0301

e'
e\u0301

t\u0323'
t\u0323\u0313

t'
t\u0313

q'
q\u0313

c'
c\u0313

k'
k\u0313

p'
p\u0313

q'
q\u0313

:
·

.-
 .̄

.^
 .̂

▓  
◻

O
°

"""

oswaltsubs = oswaltsubs.strip()

oswaltsubs = [pair.split('\n') for pair in oswaltsubs.strip().split("\n\n")]

oswaltsubs = [(before.strip(), after.strip()) for before, after in oswaltsubs]

oswaltsubs = [(before.strip(), after.strip()) for before, after in oswaltsubs]

for before, after in oswaltsubs:
  print before, after
