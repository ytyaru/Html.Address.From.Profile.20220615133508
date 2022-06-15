class Comment {
    constructor() {
        this._addressRegExp = /[a-zA-Z0-9]{34,}/g
    }
    author(url, name, photo, size) {
        return `<a href="${url}" title="${name}" target="_blank" rel="noopener noreferrer"><img src="${photo}" alt="${name}" width="${size}" height="${size}"></a>`
    }
    comment(content, author, published, publishedElapsed, mentionTypeName, mentionTypeEmoji, url, address) { // 人、日時、コメント（サーバが返すpublished日時テキストが不統一で正しくISO8601でないからバグる！）
        return `<div class="mention"><div class="mention-meta">${author}　<span title="${published}">${publishedElapsed}</span>　<span title="${mentionTypeName}" class="mention-url"><a href="${url}" target="_blank" rel="noopener noreferrer" class="mention-url">${mentionTypeEmoji}</a></span>　${this.makeMpurseSendButton(address)}</div><div>${content}</div></div>`
    }
    makeMpurseSendButton(address) {
        if (address) { return `<mpurse-send-button img-size="32" amount="0.00114114" to="${address}"></mpurse-send-button>` }
        return ''
    }
}
