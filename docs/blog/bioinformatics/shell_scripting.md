---
title: Basic shell scripting
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
---
Here are some notes from attending [LSU basic shell scripting training](http://www.hpc.lsu.edu/training/tutorials.php)
:::tip What can you do with a shell?
Check the current shell
```sh
echo $SHELL
```
List available shells on the system
```sh
cat /etc/shells
``` 
Change to another shell
```sh
exec sh
```
Date and time 
```sh
date
```
wget: get online files
```sh
wget https://ftp.gnu.org/gnu/gcc/gcc-7.1.0/gcc-7.1.0.tar.gz
```
Compile and run applications
```sh
gcc hello.c –o hello
./hello
```
:::

:::tip Quotation - Examples
```sh
str1='echo $USER'
echo $str1
```
    echo $USER

```sh
str2="echo $USER"
echo $str2
```
    echo ybao2

```sh
str3=`echo $USER`
echo $str3
```
    ybao2
:::

:::tip GNU basic calculator (bc) external calculator
Add two numbers
```sh
echo "3.8 + 4.2" | bc
```
    8.0
Divide two numbers and print result with a precision of 5 
digits: 
```sh
echo "scale=5; 2/5" | bc
```
    .40000
:::

:::tip Arrays Operations
Initialization
```sh
declare -a my_array
my_array=("Alice" "Bill" "Cox" "David")
```
Print the whole array 
```sh
${my_array[@]}
```
Delete the entire array 
```sh
unset my_array
```
:::

:::tip File Operations
Operation | bash | 
---|---
File exists  | `if [ -e test ]` 
File is a regular file | `if [ -f test]`
File is a directory | `if [ -d /home ]`
File is not zero size | `if [ -s test ]` 
File has read permission | `if [ -r test ]`
File has write permission | `if [ -w test ]`
File has execute permission | `if [ -x test ]`
:::

:::tip Integer Comparisons
Operation | bash | 
---|---
Equal to | `if [ 1 –eq 2 ]` 
Not equal to | `if [ $a –ne $b ]` 
Greater than | `if [ $a –gt $b ]` 
Greater than or equal to | `if [ 1 –ge $b ]` 
Less than | `if [ $a –lt 2 ]` 
Less than or equal to | `if [ $a –le $b ]` 
:::

:::tip Integer Comparisons
Operation | bash | 
---|---
Equal to | `if [ $a == $b ]` 
Not equal to | `if [ $a != $b ]`
Zero length or null | `if [ -z $a ]` 
Non zero length | `if [ -n $a ]`  
:::

:::tip Logical Operators 
! (NOT)
```sh
if [ ! –e test ]
``` 
&& (AND) 
```sh
if [ -f test] && [ -s test ] 
if [[ -f test && -s test ]]
if ( -e test && ! –z test )
```
| (OR) 
```sh
if [ -f test1 ] || [ -f test2 ] 
if [[ -f test1 || -f test2 ]]
```  
:::

:::tip Loops
**for loop example**
```sh
for arg in `seq 1 4` 
do 
    echo $arg;
    touch test.$arg
done
```
How to delete test files using a loop? 
```sh
rm test.[1-4]
```
**While loop example**
```sh
read counter
while [ $counter -ge 0 ]
do let counter--
    echo $counter
done
```
**Until loop example**
```sh
read counter
until [ $counter -lt 0 ]
do let counter--
    echo $counter
done
```
:::

:::danger Advanced text processing commands
- grep
- sed
- awk
:::

:::info grep & egrep
- grep: Unix utility that searches through either information piped to it 
or files. 
- egrep: extended grep, same as grep –E 
- zgrep: compressed files.
- Usage: `grep <options> <search pattern> <files>`

Option | Meaning | 
---|---
`-i` | ignore case during search 
`-r,-R` | search recursively 
`-v` | invert match i.e. match everything except pattern
`-l` | list files that match pattern
`-L` | list files that do not match pattern
`-n` | prefix each line of output with the line number within its input file. 
`-A num` | print num lines of trailing context after matching lines. 
`-B num` | print num lines of leading context before matching lines. 
:::

::: tip grep examples:
[Grep operator examples](https://www.thegeekstuff.com/2011/10/grep-or-and-not-operators/)

Search files NOT containing the word bash in current directory
```sh
grep -v bash *
```
Repeat above search using a case insensitive pattern match and 
print line number that matches the search pattern
```sh
grep -in bash *
```
Test file: `employee.txt`
```sh
cat employee.txt
```
    100  Thomas  Manager    Sales       $5,000
    200  Jason   Developer  Technology  $5,500
    300  Raj     Sysadmin   Technology  $7,000
    500  Randy   Manager    Sales       $6,000
grep OR
1. Grep OR Using \|
```sh
grep 'Man\|Sales' employee.txt
```
2. Grep OR Using -E
```sh
grep -E "Man|Sales" employee.txt
```
3. Grep OR Using egrep
```sh
egrep "Man|Sales" employee.txt
```
    100  Thomas  Manager    Sales       $5,000
    500  Randy   Manager    Sales       $6,000
grep AND
```sh
grep -E 'Dev.*Tech' employee.txt
```
:::

:::info sed
Flags | Operation | Command | Operation | 
---|---|---|---
-e | combine multiple commands | s | substitution 
-f | read commands from file | g | global replacement 
-h | print help info | p | print 
-n | disable print | i | ignore case 
-V | print version info | d | delete 
-r | use extended regex | G | add newline 
| | | w | write to file 
| | | x | exchange pattern with hold buffer 
| | | h | copy pattern to hold buffer 
| | | ; | separate commands 
:::

:::tip sed examples
Test file: `hello.sh`
```sh
cat hello.sh
```
    #!/bin/bash

    # My First Script

    echo "Hello World!"
change the word `First` to `Second`
1. Add flag -e to carry out multiple matches. 
```sh
cat hello.sh | sed -e 's/bash/tcsh/g' -e 's/First/Second/g'
```
2. Alternatively
```sh
sed 's/bash/tcsh/g; s/First/Second/g' hello.sh
```
    #!/bin/tcsh

    # My Second Script

    echo "Hello World!"
The default delimiter is slash (/), can be changed 
```sh
sed 's:/bin/bash:/bin/tcsh:g' hello.sh
```
    #!/bin/tcsh

    # My First Script

    echo "Hello World!"
Delete blank lines from a file
```sh
sed '/^$/d' hello.sh
```
    #!/bin/bash
    # My First Script
    echo "Hello World!"
Delete line $n$ through $m$ in a file
```sh
sed '2,4d' hello.sh
```
    #!/bin/bash
    echo "Hello World!"
Insert a blank line below every line matches `pattern`
```sh
sed '/First/G' hello.sh
```
    #!/bin/bash

    # My First Script


    echo "Hello World!"

Insert a blank line above and below every line matches `pattern`
```sh
sed '/First/{x;p;x;G}' hello.sh
```
Actual result
<pre>
sed: 1: "/First/{x;p;x;G}": extra characters at the end of G command
</pre>
Expected result
<pre>
#!/bin/bash
# My First Script 
echo "Hello World!"
</pre>
Why?
:::

:::info awk Syntax
`awk pattern {action} `
- awk reads the file being processed line by line. 
- The entire content of each line is split into columns with 
space or tab as the delimiter. 
- `$0` Print the entire line, use. 
- `NR` #records (lines) 
- `NF` #fields or columns in the current line. 
- By default the field delimiter is space or tab. To change the 
field delimiter use the `-F<delimiter>` command. 
:::

:::tip awk examples
```sh
uptime
```
    11:02  up 115 days, 22:07, 1 user, load averages: 5.40 5.32 5.19
```sh
uptime | awk -F, '{print $1}'
```
    11:02  up 115 days
:::
<style>
pre {
  background-color:#38393d;
  /* color: #FF33F3; */
  color: #33F3FF;
}
</style>