var users = {
    14587: {
        name: "Ivan",
        email: "ivan78@gmail.com"
    },
    28419: {
        name: "Georg",
        email: "georg.klep@gmail.com"
    },
    41457: {
        name: "Stephan",
        email: "stephan.borg@gmail.com"
    }
};
var posts = {
    7891451: {
        author: 14587,
        text: "Imagine we can encapsulate these secondary responsibilities in functions"
    },
    7891452: {
        author: 28419,
        text: `� ������������ �������� ����� super ������������ ��� �������, ���������� ������������ �����������. 
                        Ÿ ���������� ������� �� ������� ��������� � ��������� ����� this � ���� ������������. 
                        �������� ����� super ����� ����� ���� ������������ ��� ������ ������� ������������� �������`
    },
    7891453: {
        author: 28419,
        text: `DOM �� ������������ ��� �� ��������� ��������� ������������ ���� ��� �������. 
                        ������� ������������ ����, ����� �� ������ � ���������� �����, �� ����� ���� �������`
    },
    7891454: {
        author: 14587,
        text: "�������� ����� super ������������ ��� ������ �������, ������������� �������� �������"
    }
};
var comments = {
    91078454: {
        postId: 7891451,
        author: 28419,
        text: `The static String.fromCharCode() method returns a string created 
                        from the specified sequence of UTF-16 code units`
    },
    91078455: {
        postId: 7891451,
        author: 41457,
        text: `HTML ������� <template> � ��� �������� ��� ����������� ������� ����������� ��������, 
                        ������� �� ������������ �� ����� ��������, �� ����� ���� ��������������� ��� ������ JavaScript`
    },
    91078457: {
        postId: 7891452,
        author: 41457,
        text: "���������� ������ String �������� ������������� �����, ���, ������������������� ��������"
    },
    91078458: {
        postId: 7891452,
        author: 14587,
        text: `The Element.namespaceURI read-only property returns the namespace URI of the element, 
                        or null if the element is not in a namespace`
    }
};

function get_post_comments(postId) {
    var res = [];
    for (var comment in comments) {
        if (comments[comment].postId === postId) {
            res.push({
                author: get_name(comments[comment].author),
                text: comments[comment].text
            });
        }
    }

    return res;

    function get_name(author) {
        for (let user in users) {
            if (author === +user) {
                return users[user].name;
            }
        }
    }
}

console.log(get_post_comments(7891451));