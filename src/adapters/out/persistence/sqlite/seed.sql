INSERT INTO
    products (id, name, price)
VALUES (1, 'T-shirt', 1999 ),
    (2, 'Hoodie', 3999),
    (3, 'Sticker Pack', 499) ON CONFLICT (id) DO NOTHING;