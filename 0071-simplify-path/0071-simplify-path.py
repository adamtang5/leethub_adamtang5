class Solution:
    def simplifyPath(self, path: str) -> str:
        names, stack = path.split('/'), []
        for name in names:
            if name == '..':
                if len(stack):
                    stack.pop(-1)
            elif name != '' and name != '.':
                stack.append(name)
        return ''.join([f'/{name}' for name in stack]) or '/'