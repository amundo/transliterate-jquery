#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys
import codecs
from operator import itemgetter

sys.stdout = codecs.getwriter('utf-8')(sys.stdout)
source_file =  sys.argv[1]

def unicode_escape(letter):
  return "\u%04x" % ord(letter)

def unicode_escape_word(word):
  return ''.join([unicode_escape(letter) for letter in word])

lines = open(source_file).read().decode('utf-8').strip().splitlines()
pairs = [line.strip().split() for line in lines]
temp = sorted([(len(a), a, b) for a,b in pairs], reverse=True)
#pairs = [(unicode_escape_word(y),z) for x, y, z in temp]
pairs = [(y,z) for x, y, z in temp]


lang_code = source_file.split('-')[0] # i'm looking at you.

json = u"""
var %s = [
  %s
]
""" 

def escape_special_regex_characters(pattern):
  special_regex_characters = '?$.+'
  fixed = []
  for letter in pattern: 
    if letter in special_regex_characters:
      fixed.append('\\\\' + letter) 
    else:
      fixed.append(letter) 
  return ''.join(fixed)

row = u""" ["%s", "%s"],\n"""

rows = u''

for before, after in pairs:
  before = escape_special_regex_characters(before)
  rows += row % (before, after)

rows = rows.strip()[:-1] # nuke final comma.

print json % (lang_code, rows)
  
