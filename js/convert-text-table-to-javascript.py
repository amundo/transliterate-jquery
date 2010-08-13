#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys
import codecs

sys.stdout = codecs.getwriter('utf-8')(sys.stdout)
source_file =  sys.argv[1]

lines = open(source_file).read().decode('utf-8').strip().splitlines()
pairs = [line.strip().split() for line in lines]

lang_code = source_file.split('-')[0] # i'm looking at you.

json = u"""
var %s = [
  %s
]
""" 

row = u""" ['%s', '%s'],\n"""

rows = u''

for before, after in pairs:
  rows += row % (before, after)

rows = rows.strip()[:-1] # nuke final comma.

print json % (lang_code, rows)
  
