<nav role="navigation">
    @if($pages->visible()->count())
        <ul class="list-reset flex">
            @foreach($pages->visible() as $item)
            <li>
                <a href="{{ $item->url() }}" title="{{ $item->title() }}">
                    {{ $item->title() }}
                </a>
            </li>
            @endforeach
        </ul>
    @endif
</nav>
